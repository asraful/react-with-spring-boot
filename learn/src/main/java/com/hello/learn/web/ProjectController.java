package com.hello.learn.web;

import com.hello.learn.model.Project;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@Controller
public class ProjectController {

    @GetMapping("/api/project/get")
    public ResponseEntity<List<Project>> get() {
        return new ResponseEntity<>(Collections.EMPTY_LIST, HttpStatus.OK);
    }

    @PostMapping("/api/project/create")
    public ResponseEntity<Project> create(@RequestBody Project project) {
        System.out.println(project.getDescription());
        Project temp = new Project(project.getName(),project.getDescription(),"type");
        return new ResponseEntity<>(temp, HttpStatus.OK);
    }
}
