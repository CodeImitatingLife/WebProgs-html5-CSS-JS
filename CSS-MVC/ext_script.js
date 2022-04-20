
function getFact(num){
			if(num==0 || num==1)
				return 1;
			else
				return num*getFact(num-1);
}