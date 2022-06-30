import React from 'react';

const PrimaryButton = ({children}) => {
   return (
     <div>
       <button className="text-xl border px-3 py-1 rounded-lg font-bold bg-[#075985] text-[#cf8eaf]">{children}</button>
     </div>
   );
};

export default PrimaryButton;