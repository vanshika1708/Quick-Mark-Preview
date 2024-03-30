import React, { useEffect } from "react";
import Copy from '../../src/assets/copy.svg';
import Bold from '../../src/assets/bold.svg';
import Italics from '../../src/assets/italic.svg';
import Link from '../../src/assets/link.svg';
import Heading from '../../src/assets/heading.svg';
import Code from '../../src/assets/code.svg';

//Button functions in toolbar
function b1()
{
    let textarea = document.getElementById("editor");
    textarea.value += " **** ";
    document.getElementById('editor').innerHTML = textarea.value;
}

function b2()
{
    let textarea = document.getElementById("editor");
    textarea.value += " ** ";
    document.getElementById('editor').innerHTML = textarea.value;
}

function b3()
{
    let textarea = document.getElementById("editor");
    textarea.value += "[Link text Here](https://link-url-here.com) ";
    document.getElementById('editor').innerHTML = textarea.value;
}

function b4()
{
    let textarea = document.getElementById("editor");
    textarea.value += "# ";
    document.getElementById('editor').innerHTML = textarea.value;
}

function b5()
{
    let textarea = document.getElementById("editor");
    textarea.value += " ``` \n ``` ";
    document.getElementById('editor').innerHTML = textarea.value;
}

const buttonClick = () => {
    // Call multiple functions here
    copy();
    changeContent();
};

function copy() {
    let textarea = document.getElementById("editor");
    textarea.select();
    navigator.clipboard.writeText(textarea.value).then(function () {
        console.log('Copying to clipboard was successful!');
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}


function changeContent() {
    var button = document.getElementById("copyButton");
    var originalContent = button.innerHTML;
    button.innerHTML = "Copied!";
    setTimeout(function () { button.innerHTML = originalContent; }, 2000);
}

//Output window function
// Preview text in real time
function updatePreview() {
    var input = document.getElementById('editor').value;
    var output = marked.parse(input); 
    console.log("->",input);
    console.log("<-",output);
    document.getElementById('preview').innerHTML = output;
}



export default function Body() {
    useEffect(() => {
        //Preview text Updater
        document.getElementById('editor').addEventListener('input', function () {
            updatePreview();
        });

    },
        []);



    return (

        <>




            <section className=" sm:h-[40.5rem] h-full flex flex-col  sm:flex-row justify-between sm:px-16 px-6 sm:py-10 py-6 bg-purple-700 ">

                {/* Input Section */}


                <div className="w-full text-white sm:w-1/2 flex-wrap p-2 border-[1px] rounded-lg mr-6 bg-purple-500 border-black shadow-lg shadow-black">
                <div className="pb-2 text-xl font-semibold ">Input </div> 
                    {/* <div className="top-0 px-2 py-1 flex justify-between text-white text-lg font-semibold border-2 rounded-[.75rem] border-slate-700">
                        <button id="b2" onClick={b2} className="px-1  text-white hover:bg-slate-700 rounded-lg"><img src={Italics} alt="copy" className="h-[15px]"/></button>
                        <button id="b1" onClick={b1} className="px-1  text-white hover:bg-slate-700 rounded-lg"><img src={Bold} alt="copy" className="h-[20px]"/></button>
                        <button id="b3" onClick={b3} className="px-1  text-white hover:bg-slate-700 rounded-lg"><img src={Link} alt="copy" className="h-[20px]"/></button>
                        <button id="b4" onClick={b4} className="px-1  text-white hover:bg-slate-700 rounded-lg"><img src={Heading} alt="copy" className="h-[15px]"/></button>
                        <button id="b5" onClick={b5} className="px-1  text-white hover:bg-slate-700 rounded-lg"><img src={Code} alt="copy" className="h-[22px]"/></button>
                        <button id="copyButton" onClick={buttonClick} className=" hover:bg-slate-700  text-white py-[2px] px-2 rounded text-md font-semibold focus:outline-none focus:shadow-outline"><img src={Copy} alt="copy" className="h-[25px]"/></button>
                        
                    </div> */}
                    
                    <textarea id='editor' className="h-[12rem] sm:h-[23.5rem] w-full p-2 bg-purple-500  text-white font-mono" placeholder="Enter text here" style={{ outline: 'none', /* or borderColor: 'transparent' */ }}></textarea>

                </div>

                {/* Output section */}

                <div className="w-full overflow-auto mt-8 sm:m-0 sm:w-1/2 min-h-[50vh] flex-wrap p-2 border-2 rounded-lg bg-purple-500 border-black shadow-lg shadow-black">

                    <div className="top-0 p-1 text-white text-xl font-semibold">Output</div>
                    <div id='preview' className="text-white m-4 "></div>

                </div>


            </section>



        </>

    );

}