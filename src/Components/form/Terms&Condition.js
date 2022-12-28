import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Typography from '@mui/material/Typography';
// web.cjs is required for IE11 support




export default function termsCondition(props) {
    const { open, onClose } = props
    const handleClose = () => {
        onClose(false)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 750,
        height: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        overflowX: "scroll",
        p: 4,
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        TERMS OF SERVICES
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY, AS IT
                        CONTAINS IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS AND
                        REMEDIES.
                    </Typography><br />
                    <Typography color="grey">Last Revised: 2022-12-28 10:53:52</Typography>
                    <br />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        1. OVERVIEW
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ lineHeight: 2 }}>
                        This Terms of Service Agreement ("Agreement") is entered into by and between Litchies,
                        registered address Kapsons Properties, Hariparwat Crossing, Agra, India ("Company") and you,
                        and is made effective as of the date of your use of this website https://litchies.com/ ("Site") or the
                        date of electronic acceptance.<br />
                        This Agreement sets forth the general terms and conditions of your use of the https://litchies.com/
                        as well as the products and/or services purchased or accessed through this Site (the
                        "Services").Whether you are simply browsing or using this Site or purchase Services, your use of
                        this Site and your electronic acceptance of this Agreement signifies that you have read,
                        understand, acknowledge and agree to be bound by this Agreement our Privacy policy. The terms
                        "we", "us" or "our" shall refer to Company. The terms "you", "your", "User" or "customer" shall
                        refer to any individual or entity who accepts this Agreement, uses our Site, has access or uses the
                        Services. Nothing in this Agreement shall be deemed to confer any third-party rights or benefits.
                        <br />
                        Company may, in its sole and absolute discretion, change or modify this Agreement, and any
                        policies or agreements which are incorporated herein, at any time, and such changes or
                        modifications shall be effective immediately upon posting to this Site. Your use of this Site or the
                        Services after such changes or modifications have been made shall constitute your acceptance of
                        this Agreement as last revised.<br />
                        IF YOU DO NOT AGREE TO BE BOUND BY THIS AGREEMENT AS LAST REVISED, DO
                        NOT USE (OR CONTINUE TO USE) THIS SITE OR THE SERVICES.
                    </Typography><br />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        2. ELIGIBILITY
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ lineHeight: 2 }}>
                        This Site and the Services are available only to Users who can form legally binding contracts
                        under applicable law. By using this Site or the Services, you represent and warrant that you are (i)
                        at least eighteen (18) years of age, (ii) otherwise recognized as being able to form legally binding
                        contracts under applicable law, and (iii) are not a person barred from purchasing or receiving the
                        Services found under the laws of the India or other applicable jurisdiction.<br />
                        If you are entering into this Agreement on behalf of a company or any corporate entity, you
                        represent and warrant that you have the legal authority to bind such corporate entity to the terms
                        and conditions contained in this Agreement, in which case the terms "you", "your", "User" or
                        "customer" shall refer to such corporate entity. If, after your electronic acceptance of this
                        Agreement, Company finds that you do not have the legal authority to bind such corporate entity,
                        you will be personally responsible for the obligations contained in this Agreement.
                    </Typography><br />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        3. RULES OF USER CONDUCT
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ lineHeight: 2 }}>
                        By using this Site You acknowledge and agree that:
                        Your use of this Site, including any content you submit, will comply with this Agreement
                        and all applicable local, state, national and international laws, rules and regulations.
                        You will not use this Site in a manner that:
                        Is illegal, or promotes or encourages illegal activity;
                        Promotes, encourages or engages in child pornography or the exploitation of children;
                        Promotes, encourages or engages in terrorism, violence against people, animals, or property;
                        Promotes, encourages or engages in any spam or other unsolicited bulk email, or computer
                        or network hacking or cracking;
                        Infringes on the intellectual property rights of another User or any other person or entity;
                        Violates the privacy or publicity rights of another User or any other person or entity, or
                        breaches any duty of confidentiality that you owe to another User or any other person or
                        entity;
                        Interferes with the operation of this Site;
                        Contains or installs any viruses, worms, bugs, Trojan horses, Cryptocurrency Miners or
                        other code, files or programs designed to, or capable of, using many resources, disrupting,
                        damaging, or limiting the functionality of any software or hardware.
                        You will not:
                        copy or distribute in any medium any part of this Site, except where expressly authorized by
                        Company,
                        copy or duplicate this Terms of Services agreement, which was created with the help of the
                        TermsHub.io,
                        modify or alter any part of this Site or any of its related technologies,
                        access Companies Content (as defined below) or User Content through any technology or
                        means other than through this Site itself.
                    </Typography><br />
                </Box>
            </Modal>
        </div >
    );
}