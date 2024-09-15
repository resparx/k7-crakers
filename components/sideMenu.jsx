'use client'

import { useState } from 'react';

const SideMenu = ({ items }) => {

    return (
            <div
                className={`rounded-r-lg mt-4 top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg`}
            >
                <div className="p-4">
                    <ul className="space-y-2">
                        {items.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="block p-2 hover:bg-gray-700 rounded">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    );
};

export default SideMenu;