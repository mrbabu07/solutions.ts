কেন any risky এবং কেন unknown TypeScript-এ better

TypeScript-এ any আর unknown দুটোই যেকোনো ধরনের value রাখতে পারে। কিন্তু এদের approach একদম আলাদা। any type system-কে ignore করে, আর unknown type system-কে respect করে এবং use করার আগে proper check করতে বাধ্য করে।

কেন any risky

any ব্যবহার করলে ওই variable-এর জন্য TypeScript-এর type checking পুরো বন্ধ হয়ে যায়।

Type safety bypass করে

any দিলে তুমি যেকোনো property access করতে পারো বা যেকোনো method call করতে পারো, compile time-এ কোনো error আসবে না। ফলে ভুল usage থেকেও TypeScript তোমাকে বাঁচাতে পারে না।

Runtime error হয়

TypeScript যেহেতু any-এর উপর কোনো check করে না, তাই ভুলগুলো ধরা পড়ে রানটাইমে। যেমন, একটা number-এর উপর string method চালালে code compile হবে, কিন্তু run করার সময় crash করবে।

Tooling support নষ্ট হয়

Autocomplete, type suggestion, refactoring-এর মতো সুবিধাগুলো কাজ করে না, কারণ IDE বুঝতে পারে না আসলে variable-এর type কী।

ভুল code ছড়িয়ে যায়

এক জায়গায় any ব্যবহার করলে সেটা সহজেই অন্য জায়গায়ও ছড়িয়ে পড়ে। এতে পুরো codebase ধীরে ধীরে unsafe এবং কঠিন হয়ে যায় maintain করার জন্য।

কেন unknown better

unknown বেশি safe কারণ এটা value ব্যবহার করার আগে type check করতে বাধ্য করে।

Type checking enforce করে

unknown type-এর value সরাসরি ব্যবহার করা যায় না। আগে check করতে হয়, তারপর ব্যবহার করা যায়।

Type narrowing বাধ্যতামূলক করে

unknown ব্যবহার করতে হলে typeof, instanceof বা custom type guard ব্যবহার করে type narrow করতে হয়। এতে নিশ্চিত হওয়া যায় code ঠিকভাবে কাজ করবে।

Bug আগেই ধরা পড়ে

TypeScript যেহেতু explicit type validation চায়, তাই অনেক runtime error আগেই development stage-এ ধরা পড়ে।

Intent পরিষ্কার করে

unknown ব্যবহার করলে বোঝা যায় যে data পুরোপুরি trusted না। বিশেষ করে API response বা external input-এর ক্ষেত্রে এটা careful handling নির্দেশ করে।

Conclusion

any সহজ মনে হলেও এটা আসলে TypeScript-এর safety system নষ্ট করে দেয়। অন্যদিকে unknown একটু strict হলেও code-কে safe রাখে এবং ভুল কমায়। তাই বাস্তব প্রজেক্টে unknown ব্যবহার করাই ভালো approach।