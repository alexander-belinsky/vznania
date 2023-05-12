ids = []
let user_id = ""


async function speedrun() {
    let lesson_id = document.getElementById('lesson').value;
    let types = ["listen", "find_word", "learn_word", "scrabble", "insert_missed"]

    await fetch("https://vznaniya.ru/api/v2/lr/complete-task/" + "listen" + "/" + lesson_id, {
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
    await sleep(500);

    await fetch("https://vznaniya.ru/api/v2/lr/complete-task/" + "find_word" + "/" + lesson_id, {
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
    await sleep(500);

    await fetch("https://vznaniya.ru/api/v2/lr/complete-task/" + "learn_word" + "/" + lesson_id, {
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
    await sleep(500);

    await fetch("https://vznaniya.ru/api/v2/lr/complete-task/" + "scrabble" + "/" + lesson_id, {
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
    await sleep(500);

    await fetch("https://vznaniya.ru/api/v2/lr/complete-task/" + "insert_missed" + "/" + lesson_id, {
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
    await sleep(500);



    const resp = await fetch("https://vznaniya.ru/api/v2/lesson-words/filter?lesson_id=" + lesson_id + "&timestamp=1683822257345", {
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
    })


    let data = await resp.json();

    console.log(data);
    let a = data["data"];

    let b = [];

    for (let x in a) {
        b.push({"id": a[x]['id'], "text": a[x]["text"], "test_type": "write_word"});
    }

    console.log(JSON.stringify(b));

    const resp_ = await fetch("https://vznaniya.ru/api/v2/lr/counting-test", {
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
    });
    data = await resp_.json();
    console.log(data);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

async function speedrun_all() {
    let ids = await get_all_ids();
    console.log(ids);
    let progress_text = document.getElementById('progress');
    for(id in ids) {
        progress_text.innerText = "Прогресс: " + id + "/" + ids.length;
        document.getElementById('lesson').value = ids[id];
        await speedrun();
        await sleep(1500);
    }
    alert("Проспидранено");
    progress_text.innerText = "";
}

async function get_id_page(url, user_id) {
    console.log(url);
    const response = await fetch(url, {
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
    })
    let data = await response.json();
    console.log(data);
    return data;
}

async function get_all_ids() {
    user_id = ""

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    answer = []

    {
        const res = await fetch("https://vznaniya.ru/api/v2/auth/login", {
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
        });

        const data = await res.json();
        user_id = "Bearer " + data["data"]["access_token"];

        let url = "https://vznaniya.ru/api/v2/lessons/filter?page=1"

        while(url !== null) {
            let arr = await get_id_page(url, user_id);
            console.log(url, arr);
            for(let x in arr['data']) {
                answer.push(arr['data'][x]["id"]);
            }
            url = arr['links']['next'];
            if(url == null)
                break;
            url = "https:" + url.slice(5, url.length);
        }
    }

    return answer
}
