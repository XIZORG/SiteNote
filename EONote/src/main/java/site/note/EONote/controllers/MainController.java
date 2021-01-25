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

    //НЕ ФАКТ ЧТО РАБОТАЕТ
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/addUser")
    public String add (@RequestBody Map<String, String> body) throws Exception{
        System.out.println(body);
        registerRepositories.save(new RegisterPerson(body.get("login"),
                encryptor.encrypt(body.get("password"))));

        return body.get("password");
    }

    @GetMapping("/getUser/{id}")
    public List<RegisterPerson> showUser(@PathVariable(value = "id") long id){
        Optional<RegisterPerson> optional =  registerRepositories.findById(id);
        ArrayList<RegisterPerson> result = new ArrayList<>();
        optional.ifPresent(result::add);
        return result;
    }

    @GetMapping("/getPassword/{id}")
    public String showPassword(@PathVariable(value = "id") long id){
        RegisterPerson post = registerRepositories.findById(id).orElseThrow();
        return encryptor.decrypt(post.getPassword());
    }
}
