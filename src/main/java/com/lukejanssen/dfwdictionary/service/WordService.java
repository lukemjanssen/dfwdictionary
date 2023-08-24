package com.lukejanssen.dfwdictionary.service;

import java.util.List;

import com.lukejanssen.dfwdictionary.model.Word;

public interface WordService {
    public Word saveWord(Word word);

    public List<Word> getAllWords();

    public List<Word> sortByLengthAsc();

    public List<Word> sortByLengthDesc();

    public List<Word> sortAlphabetically();

    public void deleteWord(int id);

}
