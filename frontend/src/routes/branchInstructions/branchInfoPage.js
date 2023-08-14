import React from "react";

import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Dropdown from "../../components/dropdown/dropdown";
import Scrollable from "../../components/scrollinfo/scrollable";

import "./branchInfoPage.css";

const BranchInfoPage = () => {
    return (
        <div>
            <Navbar />
            <div className="branchInfoPage">
                <div className="infos-bip">
                    <div className="left-div-bip">
                        <AboutInstructions
                            title="Instruções de Desvio"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum mi felis, egestas ut orci vel, maximus sagittis elit. Vivamus lacus ante, egestas condimentum maximus nec, maximus at leo."
                        />
                        <Button
                            className="button"
                            to="/branch"
                            text="Emulador"
                        />
                    </div>
                    <div className="right-div-bip">
                        <Scrollable
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper dictum turpis quis feugiat. Quisque ut egestas tellus. Vivamus vestibulum magna erat. Vivamus et est sit amet nulla mattis luctus vitae sed mi. Morbi rutrum volutpat ligula, ut pellentesque ante tristique sed. Sed interdum nunc sed sagittis sagittis. Fusce a rutrum est, id mattis urna. Praesent sagittis in augue ac viverra. Phasellus eros arcu, euismod et eleifend a, pellentesque at nibh. Fusce congue lacus libero, vel rutrum nibh dapibus at. Vestibulum sed leo ultrices, lacinia arcu et, pretium enim.

Nullam sit amet quam facilisis, interdum est euismod, aliquam nibh. Praesent ornare ut metus nec vehicula. Morbi ac sodales velit, ut tristique turpis. Nullam condimentum aliquam purus at convallis. Vivamus ullamcorper placerat cursus. Vestibulum rutrum, quam quis sollicitudin feugiat, mauris mi aliquam libero, ut laoreet neque nunc eu diam. Nam ut erat nec odio efficitur bibendum. Proin finibus porttitor nulla, a dapibus risus vulputate non. Morbi quis diam ligula. Sed ullamcorper risus vulputate ipsum pharetra, sit amet faucibus tortor finibus. Sed et urna non mi semper bibendum. Aenean vulputate mattis feugiat.

In nibh quam, elementum ut lobortis sit amet, malesuada bibendum justo. Aliquam blandit lobortis nisi a egestas. Sed magna nisl, maximus ut libero quis, dapibus feugiat arcu. Aenean hendrerit fringilla sem, vulputate fermentum turpis imperdiet vel. Phasellus aliquet scelerisque fermentum. Donec blandit quam eleifend auctor semper. Ut et venenatis risus. Morbi eu nibh mauris. Donec eu elementum ante. Quisque sit amet iaculis ligula. Suspendisse vehicula orci diam, eu sodales diam tempor in. Cras lorem neque, fringilla et magna a, sagittis scelerisque metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In lorem magna, vestibulum at nibh id, blandit finibus nibh. Curabitur sollicitudin turpis eu orci auctor, sit amet elementum augue imperdiet. Etiam tellus lacus, ultrices vitae fringilla ut, consectetur sed tortor."
                        />{" "}
                        <Dropdown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchInfoPage;
