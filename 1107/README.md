
## ⭐1107 레포트
- 학과 소개 웹사이트 제작 - 학과사진 형식 변경(JS, JQUERY) <br>
<a href="https://seungachoi0925.github.io/cordova/1107/index.html">웹사이트</a> <br>
- py script, bun script에 대한 간단한 설명

## 📑학과 소개 웹사이트 제작 - 학과사진 형식 변경(JS, JQUERY)
### 1 첫화면(목록)
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/31cfbd84-d352-4473-ba85-21701a8848a4) <br>웹화면<br>
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/58aea9a1-143f-4119-a7cb-4bc95feca099)
<br>모바일화면<br>

### 2 학과소개
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/ff1b7a57-697b-49ca-a050-9e5e36cf4433) <br>웹화면<br>
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/6164f417-af9e-474e-8027-0fcd42c0fc87)
<br>모바일화면<br>

### 3 전공소개
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/360110ef-e83a-4bbe-b937-a369d3f68b3a) <br>웹화면<br>
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/2bd6baf2-2911-4016-9028-a32ac08beadb)
<br>모바일화면<br>

### 4 교육과정
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/d8463d8f-25fb-4617-906d-f6c578085bf1) <br>웹화면<br>
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/9620ae27-5259-4d55-ae13-67feb064f86a)
<br>모바일화면<br>

### 5 학과소개
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/bd1c921d-de2b-420a-9c75-938c36fdbcee)
 <br>웹화면<br>
![image](https://github.com/SEUNGACHOI0925/cordova/assets/112832677/63f48b3c-6d28-4af7-a4d3-84dd7ec189bb)
<br>모바일화면<br>

## 📜 Py Script, bun script에 대한 간단한 설명
### Py Script

PyScript는 HTML 인터페이스, Pyodide, WASM, 그리고 모던 웹 테크놀로지를 사용하여 브라우저에서 Python 앱을 사용할 수 있도록 해주는 프레임워크이다.
PyScript를 사용하면 Python 코드를 HTML에 포함하거나 Python 파일에 연결할 수 있으며 백엔드에서 Python을 실행하지 않고도 코드가 웹 브라우저에서 실행된다.

PyScript는 *CPython을 WebAssembly로 포팅하는 Pyodide를 기반으로 작동한다 . WebAssembly는 다른 언어로 프로그램을 작성한 다음 브라우저에서 실행할 수 있는 저수준 바이너리 형식이다. WebAssembly의 CPython을 사용하면 브라우저에서 Python 패키지를 설치하고 실행할 수 있으며, PyScript는 대부분의 Pyodide 작업을 추상화하므로 브라우저에서 Python을 사용하여 프런트엔드 앱을 구축하는 데 집중할 수 있다.

사용예시
 1. Python 백엔드를 프런트엔드로 이동 : 백엔드에서 실행 중인 Python 애플리케이션이 있는 경우 PyScript를 사용하여 이를 프런트엔드로 이동하여 웹 호스팅 비용을 절약할 수 있다.
 2. Python의 라이브러리 생태계 활용 : scikit-learn, numpy, pandas와 같은 과학 패키지는 Python에서만 사용할 수 있으며 프런트엔드에서는 사용할 수 없습니다. 그러나 PyScript를 사용하면 이러한 패키지를 프런트엔드에서 사용하거나 자체 Python 모듈을 사용할 수도 있다.
로컬 파일 시스템과 상호 작용 : 브라우저의 JavaScript에는 파일 시스템에서 파일을 읽거나 쓰기 위한 API가 없다. PyScript를 사용하면 파일 시스템에서 파일을 읽고, 데이터를 조작하고, DOM에 주입할 수 있다.

*CPython: C/C++언어로 구현되었고 파이썬 프로그래밍 언어를 구현하는 참조 구현체.
 참조사이트 :https://blog.logrocket.com/pyscript-run-python-browser/
 
### bun script

번은 Node.js나 Deno의 대체제로 다수의 자바스크립트 코드 파일을 합칠 수 있는 네이티브 번들러(native bundler)와 태스크 자동화를 위한 태스크 러너(task runner), 트랜스파일러(transpiler)로 구성되었다.

번은 리액트(React)의 서버 측 렌더링이나 데이터베이스 쿼리를 실행할 때 Node나 Deno보다는 약 3배 더 빠르다. 속도 차이는 번이 웹키트(Webkit)의 자바스크립트 코어 프레임워크를 기반으로 개발되기 때문이며 크롬, Deno, Node는 기존의 V8 자바스크립트 엔진을 이용한다.

번의 속도가 높은 또 다른 이유는 지그(Zig)라는 하위 수준 프로그래밍 언어로 개발되었기 때문이다. 지그는 메모리에 대한 낮은 제어 수준과 숨겨진 제어 흐름의 부재로 인하여 빠른 소프트웨어를 보다 간단하게 개발할 수 있다.

참조사이트:https://www.cwn.kr/news/articleView.html?idxno=11087
