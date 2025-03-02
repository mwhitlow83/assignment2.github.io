// Matthew Whitlow 
//Software Engineering 
//Assignment 2
// july 21, 2024
  
const MY_KEY = "d4lPTffWR36JORz1GXaIcBIBsBBfol6Q";
    
  // handle form submission
  function submitForm() {
      
  // store the input field values
   const sb = document.getElementById("sf").value;
   const lf = document.getElementById("lf").value;    
         
   //create the string for fetching 
        const str = "https://api.giphy.com/v1/gifs/search?q="+replaceSpacesWithPlus(sb)+"&api_key="+MY_KEY+"&limit="+lf;

// fetching
             fetch(str)
            .then((response) => response.json())
            .then((result) => {  

 // generate the gif containers based upon how many show            
              for (let i = 0; i < lf; i++) {
                
                // create an element 
                b = "box" + i.toString();
                const para = document.createElement("iframe");    
                const element = document.getElementById("square-container");
                element.appendChild(para); 
                para.setAttribute("id", b);
                  
                //assign url to element                          
                document.getElementById(b).src=result.data[i]["embed_url"];
                para.setAttribute("class","iframe" );                                                                                           
                                            }                                                 
                              });                   
                      };

    //function to replace spaces with + symbols
    function replaceSpacesWithPlus(garbage){
        return garbage.replace(' ', '+');
    };
    
    //reload page upon clearing input fields
    function submitClear(){     
      location.reload();
    };

  