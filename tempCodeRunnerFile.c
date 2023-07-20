#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);


/*
 * Complete the 'getMaximizedFunds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER f
 *  3. INTEGER_ARRAY price
 *  4. INTEGER_ARRAY profit
 */

int getMaximizedFunds(int k, int f, vector<int> price, vector<int> profit) {
    
    vector<int> total;
    
    for(int i=0; i<price.size(); i++){
        total[i]=price[i]+profit[i];
    }
    
    int total_profit=0;
    
    while(k!=0){
        for(int i=0; i<price.size(); i++){
            if(price[i]<=f){
                total_profit=max(total_profit, total[i])+f-price[i];  
            }
        }
        f=total_profit;
        k--;
    }
   return total_profit; 
}
int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string k_temp;
    getline(cin, k_temp);

    int k = stoi(ltrim(rtrim(k_temp)));

    string f_temp;
    getline(cin, f_temp);

    int f = stoi(ltrim(rtrim(f_temp)));

    string price_count_temp;
    getline(cin, price_count_temp);

    int price_count = stoi(ltrim(rtrim(price_count_temp)));

    vector<int> price(price_count);

    for (int i = 0; i < price_count; i++) {
        string price_item_temp;
        getline(cin, price_item_temp);

        int price_item = stoi(ltrim(rtrim(price_item_temp)));

        price[i] = price_item;
    }

    string profit_count_temp;
    getline(cin, profit_count_temp);

    int profit_count = stoi(ltrim(rtrim(profit_count_temp)));

    vector<int> profit(profit_count);

    for (int i = 0; i < profit_count; i++) {
        string profit_item_temp;
        getline(cin, profit_item_temp);

        int profit_item = stoi(ltrim(rtrim(profit_item_temp)));

        profit[i] = profit_item;
    }

    int result = getMaximizedFunds(k, f, price, profit);

    fout << result << "\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}