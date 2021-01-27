package site.note.EONote.controllers;


import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import site.note.EONote.Models.RegisterPerson;
import site.note.EONote.repositories.RegisterRepositories;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/main")
public class MainController {
    final String password = "Here is the password";
    final String salt = "97a6579f78ce3566";
    TextEncryptor encryptor = Encryptors.text(password, salt);

    @Autowired
    RegisterRepositories registerRepositories;

    @GetMapping("/allUsers")
    public List<RegisterPerson> showAll(){
        return registerRepositories.findAll();
    }


    @RequestMapping("/registration")
    public String add (@RequestBody String reqStr) throws Exception{
        JSONObject body = new JSONObject(reqStr);
        RegisterPerson truePers = registerRepositories.findByLoginOrEmailOrTelephone(
            body.getString("login"),
            body.getString("email"),
            body.getString("phone"));
        if (truePers == null) {
            registerRepositories.save(new RegisterPerson(body.getString("login"),
                    encryptor.encrypt(body.getString("password")),
                    body.getString("email"),
                    body.getString("phone")));
            return new JSONObject().put("success", true).toString();
        } else if(body.getString("login").equals(truePers.getLogin())){
            return new JSONObject().put("success", false).put("comment", "login duplicate").toString();
        }else if(body.getString("email").equals(truePers.getEmail())){
            return new JSONObject().put("success", false).put("comment", "email duplicate").toString();
        }else if(body.getString("phone").equals(truePers.getTelephone())){
            return new JSONObject().put("success", false).put("comment", "phone duplicate").toString();
        } else {
            return new JSONObject().put("success", false).put("comment", "unknown error").toString();
        }
    }

    @RequestMapping("/login")
    public String login (@RequestBody String reqStr) throws Exception{
        JSONObject answer = new JSONObject();

        JSONObject body = new JSONObject(reqStr);
        RegisterPerson registerPerson = new RegisterPerson(body.getString("login"),
                body.getString("password"));
        try {
            RegisterPerson truePerson = registerRepositories.findByLogin(body.getString("login"));
            truePerson.setPassword(encryptor.decrypt(truePerson.getPassword()));
            if (truePerson.getPassword().equals(registerPerson.getPassword())) {
                answer.put("success", true);
                JSONObject userData = new JSONObject()
                        .put("id", truePerson.getId())
                        .put("login", truePerson.getLogin())
                        .put("email", truePerson.getEmail())
                        .put("phone", truePerson.getTelephone());

                answer.put("userData", userData);
                return answer.toString();
            }
        } catch (Exception exeption) {
            answer.put("success", false);
            return answer.toString();
        }
        answer.put("success", false);
        return answer.toString();
    }

    @GetMapping("/getUser/{id}")
    public List<RegisterPerson> showUser(@PathVariable(value = "id") long id){
        Optional<RegisterPerson> optional =  registerRepositories.findById(id);
        ArrayList<RegisterPerson> result = new ArrayList<>();
        optional.ifPresent(result::add);
        return result;
    }
}
