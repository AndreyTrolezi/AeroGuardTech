import styled from "styled-components";

export const Bot = styled.div`
    display: none;

    @media (max-width: 425px) {
        display: block;
        position: absolute;
        top: 2rem;
        right: 2rem;
        background: none;
        border: none;

        .icon {
            position: absolute;
            z-index: 4;
            left: 1%;
            width: fit-content;
            height: 44px;
            cursor: pointer;
        }

        .hamburger {
            width: 30px;
            height: 65px;
            position: absolute;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            transition: 0.5s;
        }

        .list {
            display: flex;
            flex-direction: column;
            left: 1%;
            margin: 45px 0 0;
            flex-wrap: nowrap;
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
        }

        .list listItems {
            padding: 0;
            list-style: none;
        }

        .list .listItems li {
            margin: 2px 0;
            cursor: pointer;
        }

        .list .listItems li:hover {
            font-weight: 800;
        }

        .icon .iconActive .hamburger {
            background: transparent;
            box-shadow: 0 2px 5px transparent;
        }

        .menu.menuOpen {
            width: 150px;
            height: 100vh;
            background: #000;
        }

        
    }
`