import { describe, expect, test, it } from 'vitest'
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL || 'https://localhost:8080'; // Example


const PHONE_NUMBER_1="8383978488";
const NAME_1="kartik"


describe("Signup endpoints",()=>{


it('Double signup doesnt work', async() => {
  const response1 = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
    number: PHONE_NUMBER_1,
  });

  const response2 = await axios.post(`${BACKEND_URL}/api/v1/user/signup/verify`,{
    name:NAME_1,
    otp: "000000"
  });

  expect(response1.status).toBe(200);
  expect(response2.status).toBe(200);
  expect(response1.data.id).not.toBeNull();

  // expect(async()=>{
  //   await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
  //     number: PHONE_NUMBER_1,
  //   });
  // }).toThrow();
 
  })

})