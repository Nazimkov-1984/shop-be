'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      [
        {
          id:"2545668",
          imgUrl:"https://user-images.githubusercontent.com/61156194/102252345-a5484100-3f0e-11eb-978b-f381103aab2e.jpg",
          productName: 'Ride',
          price: 50,
          count: 15
        },
        {
          id:"2545668",
          imgUrl:"https://user-images.githubusercontent.com/61156194/102252372-ac6f4f00-3f0e-11eb-90ba-c06f078b05bc.jpg",
          productName: 'Run',
          price: 50,
          count: 5
        },
        {
          id:"2545668",
          imgUrl:"https://user-images.githubusercontent.com/61156194/102252429-c1e47900-3f0e-11eb-87c1-9d50399d4db8.jpg",
          productName: 'Sing',
          price: 50,
          count: 3
        },
        {
          id:"2545668",
          imgUrl:"https://user-images.githubusercontent.com/61156194/102252433-c27d0f80-3f0e-11eb-940f-d6ba8e18a94d.jpg",
          productName: 'Swim',
          price: 50,
          count: 4
        },
        {
          id:"2545668",
          imgUrl:"https://user-images.githubusercontent.com/61156194/102252435-c315a600-3f0e-11eb-9915-1041d6c9f584.jpg",
          productName: 'Sheep',
          price: 50,
          count: 14
        },
        {
          id:"2545668",
          imgUrl:"https://user-images.githubusercontent.com/61156194/102252510-d759a300-3f0e-11eb-853c-4885e03e9434.jpg",
          productName: 'Turtle',
          price: 50,
          count: 12
        },
        {
          id:"2545668",
          imgUrl:"https://user-images.githubusercontent.com/61156194/102252524-dc1e5700-3f0e-11eb-9f0a-6c8d1074d1fb.jpg",
          productName: 'Skirt',
          price: 50,
          count: 11
        }

      ]
       
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
