
// C++ program to illustrate Pointers in C++ 
#include <stdio.h> 
#include <iostream> 
//#include <stream.h>
#include <string>
#include <cstring>
#include <stdlib.h>
#include <stdio.h>

using namespace std;
 
class Person
{
public:
    string p_name;
   //Person (char *name_str, char *type_str)
   //{
      //p_name = new string (name_str);
      //p_type = new string (type_str);
   //}

   //void show_person ()
   //{
      //cout << p_name->str() << " the " << p_type->str() << '\n';
   //}

   //~Person ()
   //{
      //delete p_name;
      //delete p_type;
   //}

private:
   string *px_name;
   string *pl_type;
};


void geeks() 
{ 
    int var = 20;  
      
    // declare pointer variable     
    //char *ptr = "hmm";  
    Person eric;  
    eric.p_name = "ericx2x";

    cout << "eric is, " << eric.p_name;

    // note that data type of ptr and var must be same 
    //ptr = &var;     
  
    // assign the address of a variable to a pointer 
    //printf("Value at ptr = %p \n",ptr); 
    //printf("Value at var = %d \n",var); 
    //printf("Value at *ptr = %d \n", *ptr);      
    //cout << "Cout value at ptr = " << ptr << endl;
    //cout << "Cout value at var = " << var << endl;
    //cout << "Cout value at *ptr = " << *ptr << endl;

} 
  
// Driver program 
int main() 
{ 
    geeks(); 
} 
