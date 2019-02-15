# framework-component-output-decorator

## 설명

자식 컴포넌트는 @Output 데코레이터와 함께 선언된 컴포넌트 프로퍼티(출력프로퍼티)를 EventEmitter 객체로 초기 설정을 한다. 그리고 부모 컴포넌트로 상태를 전달하기 위해 emit() 메소드를 사용하여 이벤트를 발생시키면서 상태를 전달한다.

부모 컴포넌트는 자식 컴포넌트가 전달한 상태를 이벤트 바인딩을 통해 접수한다.

````angular


<!-- 부모 템플릿과 컴포넌트 클래스 -->
<child (myEvent)="myEventHandler($event)"></child>
...
myEventHandler(state: string) {
    // 자식컴포넌트로부터 받은 state에 대한 작업 기술.
}

...
<!-- 자식 템플릿과 컴포넌트 클래스 -->
<button (click)="handleClick(state)">X</button>
...
@Output() myEvent = EventEmitter<String>();

handleClick(state) {
    // 자식 컴포넌트의 state에 대한 작업 기술
    // 부모 컴포넌트에 state를 날리기/던지기/방출하기
    this.myEvent.emit(state);
}

```
-자식 컴포넌트에서 부모 컴포넌트로 상태 전달-
