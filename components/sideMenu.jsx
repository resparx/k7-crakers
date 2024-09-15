'use client'

import { useState } from 'react';

const SideMenu = ({ items }) => {

    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (item) => {
        setCheckedItems((prev) => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    return (
        <div className="rounded-r-lg mt-4 ] bg-gray-900 text-white shadow-lg w-64">
        <div className="p-4">
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`checkbox-${index}`}
                            checked={!!checkedItems[item.label]}
                            onChange={() => handleCheckboxChange(item.label)}
                            className="mr-2"
                        />
                        <label htmlFor={`checkbox-${index}`} className="cursor-pointer">
                            {item.label}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
};

export default SideMenu;