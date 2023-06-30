package com.example.case_md4.controller;

import com.example.case_md4.model.Nation;
import com.example.case_md4.service.nation.INationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/nation")
public class NationController {
    @Autowired
    private INationService iNationService;
    @GetMapping()
    public ResponseEntity<Iterable<Nation>> findAll() {
        return new ResponseEntity<>(this.iNationService.findAll(), HttpStatus.OK);
    }
}
