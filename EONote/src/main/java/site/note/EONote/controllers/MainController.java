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
    @PostMapping("/addUser")
    public void add (@RequestBody JSONObject body) throws Exception{
        registerRepositories.save(new RegisterPerson(body.getString("login"),
                encryptor.encrypt(body.getString("password"))));
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
