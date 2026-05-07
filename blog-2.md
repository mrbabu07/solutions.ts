TypeScript-এর Pick এবং Omit utility types মূলত code duplication কমাতে সাহায্য করে। এগুলো ব্যবহার করে আমরা একটি বড় “master interface” থেকে ছোট ছোট প্রয়োজন অনুযায়ী আলাদা type তৈরি করতে পারি, নতুন করে একই structure বারবার লেখার দরকার পড়ে না। এটাই DRY (Don't Repeat Yourself) principle maintain করার সবচেয়ে clean উপায়।

How they create “slices”

বড় interface কে বিভিন্ন context অনুযায়ী ছোট অংশে ভাগ করাই এখানে মূল idea। যেমন API response, form data, বা UI view—সব জায়গায় সব field দরকার হয় না।

Pick<Type, Keys>

Pick ব্যবহার করে আমরা একটি interface থেকে নির্দিষ্ট কিছু property select করতে পারি।

ধরো একটা বড় User interface আছে, কিন্তু আমাদের শুধু name আর email দরকার।

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type UserBasicInfo = Pick<User, "name" | "email">;

এখানে UserBasicInfo শুধু দরকারি field নিয়ে তৈরি হয়েছে।

Omit<Type, Keys>

Omit ঠিক এর উল্টো কাজ করে। এটি নির্দিষ্ট কিছু property বাদ দিয়ে বাকি সব রেখে দেয়।

ধরো product add করার সময় id আর createdAt দরকার নেই, কারণ এগুলো backend তৈরি করবে।

interface Product {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
}

type ProductForm = Omit<Product, "id" | "createdAt">;

এখানে form-এর জন্য clean type তৈরি হলো।

Benefits of DRY approach
Single source of truth

একটা master interface থাকলে সব derived type automatically তার উপর depend করে। আলাদা আলাদা copy রাখার দরকার হয় না।

Automatic updates

Master interface-এ কোনো field change করলে সব Pick বা Omit based type নিজে থেকেই update হয়ে যায়।

Less human error

Manually copy করলে অনেক সময় typo বা mismatch হয়। utility type ব্যবহার করলে সেই risk থাকে না।

Better maintainability

Codebase বড় হলে শুধু base interface maintain করলেই হয়, বাকিগুলো auto-consistent থাকে।

Clear intent

Pick বা Omit দেখে সহজেই বোঝা যায় এটা বড় structure-এর একটা specific slice, আলাদা কিছু না।

Conclusion

Pick এবং Omit TypeScript-এর খুব powerful feature, যা code duplication কমায় এবং structure clean রাখে। এগুলো ব্যবহার করলে code আরও maintainable, readable এবং scalable হয়, বিশেষ করে বড় project-এর ক্ষেত্রে।