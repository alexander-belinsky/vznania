function speedrun() {

    let lesson_id = document.getElementById('lesson').value;
    let user_id = ""
    let types = ["listen", "find_word", "learn_word", "scrabble", "insert_missed"]

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    {
        fetch("https://vznaniya.ru/api/v2/auth/login", {
            "headers": {
                "accept": "application/json",
                "accept-language": "ru,en;q=0.9",
                "authorization": "Bearer null",
                "content-type": "application/json;charset=UTF-8",
                "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://student.vznaniya.ru/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"password\":\"" + password + "\"}",
            "method": "POST",
            "mode": "cors",
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
                user_id = "Bearer " + data["data"]["access_token"];
                for (let x in types) {
                    fetch("https://vznaniya.ru/api/v2/lr/complete-task/" + types[x] + "/" + lesson_id, {
                        "headers": {
                            "accept": "application/json",
                            "accept-language": "ru,en;q=0.9",
                            "authorization": user_id,
                            "content-type": "application/json;charset=UTF-8",
                            "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-site"
                        },
                        "referrer": "https://student.vznaniya.ru/",
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": "{\"group_id\":129713}",
                        "method": "POST",
                        "mode": "cors",
                    });
                }

                const resp = fetch("https://vznaniya.ru/api/v2/lesson-words/filter?lesson_id=" + lesson_id + "&timestamp=1683822257345", {
                    "headers": {
                        "accept": "application/json",
                        "accept-language": "ru,en;q=0.9",
                        "authorization": user_id,
                        "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-site"
                    },
                    "referrer": "https://student.vznaniya.ru/",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": null,
                    "method": "GET",
                    "mode": "cors",
                }).then((response) => {
                    response.json().then((data) => {
                        console.log(data);
                        let a = data["data"];

                        let b = [];

                        for (let x in a) {
                            b.push({"id": a[x]['id'], "text": a[x]["text"], "test_type": "write_word"});
                        }

                        console.log(JSON.stringify(b));

                        fetch("https://vznaniya.ru/api/v2/lr/counting-test", {
                            "headers": {
                                "accept": "application/json",
                                "accept-language": "ru,en;q=0.9",
                                "authorization": user_id,
                                "content-type": "application/json;charset=UTF-8",
                                "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
                                "sec-ch-ua-mobile": "?0",
                                "sec-ch-ua-platform": "\"Windows\"",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-site"
                            },
                            "referrer": "https://student.vznaniya.ru/",
                            "referrerPolicy": "strict-origin-when-cross-origin",
                            "body": "{\"lesson_id\":" + lesson_id + ",\"group_id\":\"129713\",\"answers\":" + JSON.stringify(b) + "}",
                            "method": "POST",
                            "mode": "cors",
                        }).then((response) => {
                            response.json().then((data) => {
                                console.log(data);
                                alert("Проспидранено");
                            })
                        });
                    });
                });
            })
        });
    }
}