import express from 'express';
//application ==> عشان احنا بنستخدم ال typescript
//وممكن ما نستخدمهوش
//, { application }

//create instance of server
const app = express();
const port = 3000;

console.log('hello·world');

//start express server
//ممكن نقوله ابعتلي callback فانكشن بيحصلها لما السيرفر يشتغل
app.listen(port, () => {
  console.log(`server is run at port ${port}`);
});

export default app;
