//https://www.youtube.com/watch?v=7arYbAhu0aw
// const
//     - A compile time constraint that an object can not be modified
#include <iostream>

using namespace std;

int main(){
   const int i = 8;
   //i = 6;  //should error

   const int *p1 = &i;
   p1++;//the pointer is fine to change but not the data it is pointing to.

   int* const p2;

   const int* const p3;

   const_cast<int&>(i) = 6;//cast away the constanance of this data in i?
   
   int j;
   static_cast<const int&>(j); // fails because j is const but this allows you to const data after it has been declared.

   //a.) guards against inadvertant writing of a variable
   //b.) self documenting
   //c.) enables compiler to do more optimization, making code faster.
   //d.) const means the variable can be put in ROM.

   return 0;
}
