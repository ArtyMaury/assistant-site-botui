//#region init

import Vue from 'vue'
import BotUI from 'botui'
import {
    ApiAiClient,
    ApiAiConstants,
    IStringMap,
    IRequestOptions,
    IApiClientOptions,
    IServerResponse
} from "api-ai-javascript"
// import { IRequestOptions, IServerResponse, ApiAiConstants } from "api-ai-javascript/ApiAiClient"
// const lang = ApiAiConstants.AVAILABLE_LANGUAGES.FR;

const client = new ApiAiClient({
    accessToken: 'f8c540d1fa9b4014b11b5075ee5222bc',
    lang: ApiAiConstants.AVAILABLE_LANGUAGES.FR
})

const botui = BotUI('botui-app', {
    vue: Vue // pass the dependency.
})

//#endregion

//#region Conversation

requestEventChatbot('WELCOME')
    .then(askInput)
    .then(askChatbot)

//#endregion

//#region functions

function askInput() {
    return botui.action.text({
        action: {
            placeholder: 'Type here'
        }
    }).then(res => {
        return res.value
    })
}

function addMessage(message) {
    return botui.message.add({
        content: message
    })
}

function addSuggestions(suggestions) {
    return botui.action.button({
        action: suggestions
    })
}

function addSuggestionsFromChatbot(suggestions) {
    var formattedSugg = suggestions.map(sugg => {
        return {
            text: sugg.title,
            value: sugg.title
        }
    })
    return botui.action.button({
        action: formattedSugg
    })
}

function addMessagesFromChatbot(messages) {
    var promise = new Promise((res, rej) => {
        res(0)
    });
    messages.forEach(message => {
        promise = promise.then(() => {
            return addMessageFromChatbot(message)
        })
    });
    return promise;
}

function addMessageFromChatbot(message) {
    if (message.type == "simple_response") {
        return addMessage(message.textToSpeech)
    }
    else if (message.type == 0) {
        return addMessage(message.speech)
    }
    // Pour le moment les suggestions sont dificiles à gérer
    /*else if (message.type == "suggestion_chips") {
        return addSuggestionsFromChatbot(message.suggestions)
    } */
    else {
        return new Promise((res, rej) => {
            res(0)
        })
    }
}

function requestEventChatbot(req) {
    return client.eventRequest(req)
        .then(res => {
            return clearChatbotResponse(res)
        })
        .then(addMessagesFromChatbot)
        .catch(err => {
            console.log(err);
        })
}

function askChatbot(req) {
    return client.textRequest(req)
        .then(res => {
            return clearChatbotResponse(res)
        })
        .then(addMessagesFromChatbot)
        .catch(err => {
            console.log(err);
        })
}

function clearChatbotResponse(res) {
    if (res.status.code == 200) {
        return res.result.fulfillment.messages
    } else {
        throw res.status
    }
}




//#endregion