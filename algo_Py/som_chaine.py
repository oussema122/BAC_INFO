def somCh(ch):
     if ch=="" :
         return 0
     elif "0"<=ch<="9" :
         return int(ch[0])+somCh(ch[1:])
     else :
         return somCh(ch[1:])
print(somCh("bac2022"))
