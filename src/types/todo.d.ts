interface ItodoItemContent {
  content: string;
}

interface ITodoItem extends ItodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}

//.d.ts로 정의하게 되면 import 없이 전역에서 type을 사용할 수 있음.
