package site.note.EONote.controllers;

import netscape.javascript.JSObject;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import site.note.EONote.Models.RegisterPerson;
import site.note.EONote.repositories.RegisterRepositories;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.security.crypto.keygen.KeyGenerators;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
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


    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/registration")
    public String add (@RequestBody String reqStr) throws Exception{
        JSONObject body = new JSONObject(reqStr);
        System.out.println(body);
        registerRepositories.save(new RegisterPerson(body.getString("login"),
                encryptor.encrypt(body.getString("password")),
                body.getString("email"),
                body.getString("telephone")));

        return "ok";
    }

    @RequestMapping("/login")
    public RegisterPerson login (@RequestBody String reqStr) throws Exception{
        JSONObject body = new JSONObject(reqStr);
        RegisterPerson registerPerson = new RegisterPerson(body.getString("login"),
                body.getString("password"));
        try {
            RegisterPerson truePerson = registerRepositories.findByLogin(body.getString("login"));
            truePerson.setPassword(encryptor.decrypt(truePerson.getPassword()));
            if (truePerson.getPassword().equals(registerPerson.getPassword())) {
                truePerson.setPassword(null);
                return truePerson;
            }
        } catch (NullPointerException ex) {
            return null;
        }
        return null;
    }

    @GetMapping("/getUser/{id}")
    public List<RegisterPerson> showUser(@PathVariable(value = "id") long id){
        Optional<RegisterPerson> optional =  registerRepositories.findById(id);
        ArrayList<RegisterPerson> result = new ArrayList<>();
        optional.ifPresent(result::add);
        return result;
    }
}
