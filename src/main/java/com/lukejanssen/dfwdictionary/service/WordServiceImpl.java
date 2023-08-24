package com.lukejanssen.dfwdictionary.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lukejanssen.dfwdictionary.model.Word;
import com.lukejanssen.dfwdictionary.repository.WordRepository;

@Service
public class WordServiceImpl implements WordService {

    @Autowired
    private WordRepository wordRepository;

    @Override
    public Word saveWord(Word word) {
        return wordRepository.save(word);
    }

    @Override
    public List<Word> getAllWords() {
        return wordRepository.findAll();
    }

    @Override
    public List<Word> sortByLengthAsc() {
        List<Word> words = wordRepository.findAll();
        words.sort((w1, w2) -> w1.getLength() - w2.getLength());
        return words;
    }

    @Override
    public List<Word> sortByLengthDesc() {
        List<Word> words = wordRepository.findAll();
        words.sort((w1, w2) -> w2.getLength() - w1.getLength());
        return words;
    }

    @Override
    public void deleteWord(int id) {
        wordRepository.deleteById(id);
    }

    @Override
    public List<Word> sortAlphabetically() {
        List<Word> words = wordRepository.findAll();
        words.sort((w1, w2) -> w1.getWord().compareTo(w2.getWord()));
        return words;
    }

}
