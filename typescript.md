**typeScript**

**Mapped Types**
// creating a partial types from mapped types
type Partial<T, K extends keyof T> = {
  [P in keyof T]?: T[P];
} & Omit<T, K>;

// Example object type
type Obj = {
  a: number;
  b: number;
  c: number;
};

// Make 'a' and 'c' optional
type PartialObj = Partial<Obj, 'a' | 'c'>;

const obj: PartialObj = {
  b: 3,
};
