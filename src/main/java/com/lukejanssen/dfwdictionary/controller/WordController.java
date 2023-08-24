package com.lukejanssen.dfwdictionary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.lukejanssen.dfwdictionary.model.Word;
import com.lukejanssen.dfwdictionary.service.WordService;

@RestController
@RequestMapping("/word")
@CrossOrigin

public class WordController {

    @Autowired
    private WordService wordService;

    @PostMapping("/add")
    public String add(@RequestBody Word word) {
        word.setWord(word.getWord().substring(0, 1).toUpperCase() + word.getWord().substring(1));
        wordService.saveWord(word);
        return "Word added successfully";
    }

    @GetMapping("/getAll")
    public List<Word> getAllWords() {
        return wordService.getAllWords();
    }

    /**
     * Sort words by number of length descending
     */
    @GetMapping("/sortByLengthDesc")
    public List<Word> sortByLengthDesc() {
        return wordService.sortByLengthDesc();
    }

    /**
     * Sort words by number of length ascending
     */
    @GetMapping("/sortByLengthAsc")
    public List<Word> sortByLengthAsc() {
        return wordService.sortByLengthAsc();
    }

    /**
     * Deletes word by id
        */  
    @DeleteMapping("/delete/{id}")
    public String deleteWord(@PathVariable int id) {
        wordService.deleteWord(id);
        return "Word deleted successfully";
    }

    /**
     * Sorts words in alphabetical order
     */
    @GetMapping("sortByAlphabetical")
    public List<Word> sortAlphabetically() {
        return wordService.sortAlphabetically();
    }
    

    
    


    


}
