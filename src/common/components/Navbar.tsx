import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Navbar.css";
import {  IonLabel, IonFooter } from "@ionic/react";
import useNavigationData from "../hooks/useNavigationData";
import CloseIcon from "../icons/CloseIcon";
import LogoutIcon from "../icons/LogoutIcon";
import HamburgerIcon from "../icons/Hamburger"

const Navbar: React.FC = () => {
  const { modules } = useNavigationData();
  const [showNavbar, setShowNavbar] = useState(true);
  const history = useHistory();

  const moduleColors = [
    { color: "#1C878F", hoverColor: "#176d73" },
    { color: "#384981", hoverColor: "#2e3d6c" },
    { color: "#4699DD", hoverColor: "#3778ad" },
    { color: "#EC6339", hoverColor: "#c55330" },
    { color: "#F3B24A", hoverColor: "#d29a41" },
  ];

  return (
    <>
      <IonFooter>
        {showNavbar ? (
        <div className="flex flex-row w-full h-10">
          {modules.map((module, index) => (
            <button
              key={module.id}
              value={module.title}
              className="transition-all grow"
              style={{
                backgroundColor: moduleColors[index].color,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  moduleColors[index].hoverColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = moduleColors[index].color)
              }
              onClick={() => {
                history.push(module.path)
              }}
            >
              <IonLabel className="font-semibold text-white">{module.title}</IonLabel>
            </button>
          ))}
          <button
            className="transition-all grow max-w-16 justify-center flex items-center"
            style={{
              backgroundColor: "#d11439",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#A91D3A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#d11439")
            }
            onClick={() => {
              history.push('/')
            }}
          >
            <LogoutIcon/>
          </button>
          <button
            className="transition-all grow max-w-16 justify-center flex items-center"
            style={{
              backgroundColor: "#ff7411",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#E56F1A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff7411")
            }
            onClick={() => setShowNavbar(false)}
          >
            <CloseIcon />
          </button>
        </div>
        ) : (
          <div className="flex w-full items-center justify-end p-4 bg-background">
            <button className="w-10 h-10 rounded-[1rem] bg-button-primary flex items-center justify-center" onClick={() => setShowNavbar(true)}> 
              <HamburgerIcon/>
            </button>
          </div>
        )}
      </IonFooter>
    </>
  );
};

export default Navbar;
