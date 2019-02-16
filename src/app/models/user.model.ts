export class User {
    // 생성자 파라미터에 접근 제한자를 사용하면 파라미터는 암묵적으로 프로퍼티로
    // 정의되고 생성자 내부에서 별도의 프로퍼티 초기화가 없어도 암묵적으로 초기화가 수행된다.
    constructor(public id: number, public name: string, public role: string) {}
}
