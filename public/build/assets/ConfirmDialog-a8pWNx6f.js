import{j as e}from"./app-gwhQCu6T.js";function x({show:t,title:a="Confirm Action",message:o="Are you sure you want to proceed?",confirmText:n="Confirm",cancelText:i="Cancel",onConfirm:l,onCancel:r,type:s="danger"}){if(!t)return null;const d=()=>{switch(s){case"danger":return"bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600";case"warning":return"bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600";case"info":return"bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600";default:return"bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600"}},m=()=>{switch(s){case"danger":return e.jsx("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900",children:e.jsx("svg",{className:"h-6 w-6 text-red-600 dark:text-red-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})});case"warning":return e.jsx("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900",children:e.jsx("svg",{className:"h-6 w-6 text-yellow-600 dark:text-yellow-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})});default:return e.jsx("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900",children:e.jsx("svg",{className:"h-6 w-6 text-blue-600 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})}};return e.jsxs("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity animate-fade-in",onClick:r}),e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsxs("div",{className:"relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg animate-scale-in",children:[e.jsx("div",{className:"bg-white dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:e.jsxs("div",{className:"sm:flex sm:items-start",children:[m(),e.jsxs("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex-1",children:[e.jsx("h3",{className:"text-lg font-semibold leading-6 text-gray-900 dark:text-white",id:"modal-title",children:a}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:o})})]})]})}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2",children:[e.jsx("button",{type:"button",onClick:l,className:`inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto transition-all duration-200 transform hover:scale-105 ${d()}`,children:n}),e.jsx("button",{type:"button",onClick:r,className:"mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-600 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500 sm:mt-0 sm:w-auto transition-all duration-200",children:i})]})]})})]})}if(typeof window<"u"&&!document.getElementById("confirm-dialog-styles")){const t=document.createElement("style");t.id="confirm-dialog-styles",t.textContent=`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes scale-in {
            from { 
                opacity: 0;
                transform: scale(0.95);
            }
            to { 
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .animate-fade-in {
            animation: fade-in 0.2s ease-out;
        }
        
        .animate-scale-in {
            animation: scale-in 0.3s ease-out;
        }
    `,document.head.appendChild(t)}export{x as C};
