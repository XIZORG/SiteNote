package site.note.EONote.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import site.note.EONote.Models.RegisterPerson;
import site.note.EONote.repositories.RegisterRepositories;

import java.util.List;

@RestController
public class MainController {


    @Autowired
    RegisterRepositories registerRepositories;

    @GetMapping("/allUsers")
    public List<RegisterPerson> showAll(){
        return registerRepositories.findAll();
    }
}
