package com.hello.learn.web;

import com.hello.learn.model.Project;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Controller
public class ProjectController {

    @GetMapping("/api/projects")
    public ResponseEntity<List<Project>> get() {
        List<Project> list = new ArrayList<>();
        list.add(new Project("Data Analysis","Semantics of the financial data","Data"));
        list.add(new Project("Food Data Analysis","Semantics of the food consumption","Data"));
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/api/projects/create")
    public ResponseEntity<Project> create(@RequestBody Project project) {
        System.out.println(project.getDescription());
        Project temp = new Project(project.getName(),project.getDescription(),"type");
        return new ResponseEntity<>(temp, HttpStatus.OK);
    }
}
