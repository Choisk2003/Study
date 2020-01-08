# 클로저(Closure)

---

## 내부함수와 외부함수



```javascript
function outter(){
    function inner(){
        var text = 'Hello world';
        alert(title);
    }
    inner();
}
outter(); //"Hello world"출력
```



함수 outter 안에 inner가 정의 되어 있다. inner를 내부 함수, outter를 외부 함수라고 한다.



```javascript
function outter(){
    var text = 'Hello world';
    function inner(){
        alert(title);
    }
    inner();
}
outter(); //"Hello world"출력
```



내부함수 inner에서 외부함수 outter의 지역변수에 접근할 수 있다.



## Closure



```javascript
function func(){
	var text = 'Hello world';
    return function{
        alert(title);
    }
}
var closure = func();
closure(); //"Hello world"출력
```



func를 호출해 closure에 이름 없는 함수를 담았다. func가 끝난 후 text 지역변수는 소멸되는 것이 자연스럽지만, closure를 호출했을 때 text의 값이 출력되는 것을 볼 수 있다. 클로저란 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.

**전역변수를 사용하지 않고 값을 남길 수 있다.**



### Closure 사용



```javascript
var count = 0;
function upper(){
    count++;
}
```

> > > > > > > > > > > > > >->
> > > > > > > > > > > > > >
> > > > > > > > > > > > > >```javascript
> > > > > > > > > > > > > >var upper = (function(){
> > > > > > > > > > > > > >    var count = 0;
> > > > > > > > > > > > > >    return function(){
> > > > > > > > > > > > > >        ++count;
> > > > > > > > > > > > > >    }
> > > > > > > > > > > > > >})(); // 즉시호출
> > > > > > > > > > > > > >```
> > > > > > > > > > > > > >
> > > > > > > > > > > > > >
> > > > > > > > > > > > > >
> > > > > > > > > > > > > >