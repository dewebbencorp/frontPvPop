import React, { useState } from "react";
import "./Navbar.css";
import {  IonLabel, IonFooter, IonButton } from "@ionic/react";
import useNavigationData from "../hooks/useNavigationData";
import CloseIcon from "../icons/CloseIcon";
import LogoutIcon from "../icons/LogoutIcon";

const Navbar: React.FC = () => {
  const { modules } = useNavigationData();
  const [showNavbar, setShowNavbar] = useState(true);

  const moduleColors = [
    { color: "#1C878F", hoverColor: "#176d73" },
    { color: "#384981", hoverColor: "#2e3d6c" },
    { color: "#4699DD", hoverColor: "#3778ad" },
    { color: "#EC6339", hoverColor: "#c55330" },
    { color: "#F3B24A", hoverColor: "#d29a41" },
  ];

  return (
    <>
      <IonFooter className="h-10">
        {showNavbar ? (
        <div className="flex flex-row w-full h-full">
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
          <div className="flex w-full items-center justify-end px-4 bg-background">
            <IonButton className="w-10 rounded-[0.5rem]" onClick={() => setShowNavbar(true)}> X </IonButton>
          </div>
        )}
      </IonFooter>
    </>
  );
};

export default Navbar;
