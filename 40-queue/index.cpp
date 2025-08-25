#include<iostream>


using namespace std;

# define SIZE 5

class Queue{

    int arr[SIZE];
    int front,rear;

      public:Queue(){
        front = rear = -1;
      }
};