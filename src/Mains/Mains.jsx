import React from 'react';

const Mains = () => {
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto '>
                <div className='w-70%'>

                    <h1>Active Auctions</h1>
                    <p>Discover and bid on extraordinary items</p>
                    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Items</th>
                                    <th>Current Bid</th>
                                    <th>Time Left</th>
                                    <th>Bid Now</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th><img src="" alt="" /></th>
                                    <td>Cy Ganderton Discover and bid on extraordinary items</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mains;