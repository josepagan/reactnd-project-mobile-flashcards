import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

import { createCard } from "../store/cardsSlice";

const NewQuestionScreen = ({ route }) => {

    const dispatch = useDispatch()
    const { deckId } = route.params
    // console.log("DECK ID OMG", deckId)

    const [questionText, setQuestionText] = useState("");
    const [answerText, setAnswerText] = useState("");
    const handleQuestionTextChange = value => setQuestionText(value)
    const handleAnswerTextChange = value => setAnswerText(value)

    const handleButton = () => {
        const cardPayload = {
            id: uuid(),
            question: questionText,
            answer: answerText,
            deckId

        }
        console.log("create card button pressed", createCard(cardPayload))
        dispatch(createCard(cardPayload));
        // navigation.navigate("Decks")

    }

    return (
        <>
            <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 20 }}>Question:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleQuestionTextChange}
                    value={questionText}
                    placeholder="..."
                    textAlignVertical="top"
                    multiline={true}

                />
            </View>


            <View style={{ flex: 2, justifyContent: "flex-start" }}>

                <Text style={{ fontSize: 20 }}>Answer:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleAnswerTextChange}
                    value={answerText}
                    placeholder="..."
                    textAlignVertical="top"
                    multiline={true}
                />
            </View>


            <View style={{ maxHeight: 200 }}>

                <Button title="ok" onPress={handleButton} />
            </View>
            {/* <View style={{ backgroundColor: "red" }} ></View> */}
        </>

    );

}

const styles = StyleSheet.create({
    input: {
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 25,
        // justifyContent: "flex-end"
    },
});
export default NewQuestionScreen;