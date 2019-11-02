#include<iostream>
#include<stack>
#include<string>
#include<fstream>
#include<iostream>

using namespace std;

struct Stack{
    int data[10000];
    int size;
    Stack(){
        size=0;
    }
    void push(int num){
        data[size] = num;
        size++;
    }
    int pop(){
        if(empty()){
            return -1;
        }else{
            size--;
            return data[size];
        }
    }
    bool empty(){
        if(size==0){
            return true;
        }else{
            return false;
        }
    }
    int top(){
        if(empty()){
            return -1;
        }else{
            return data[size];
        }
    }
};

int main(){ 
    string filePath = "./Data Structure/Stack/acmicpc.net/10828/sample.txt";
    ifstream openFile(filePath.data());
    string line;
    int index;
    cin >> index;
    while(index--){
        string cmd;
        
    }
    openFile.close();

    int n;
    cin >> n;
    cout << n;
    return 0;
}
