"use client";

import { X } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAlertStore } from "../_Stores/Cart_Store";

export function AddingItemAlert() {
  const { showAlert, toggleShowAlert, alertMessage } = useAlertStore();

  useEffect(() => {
    if (!showAlert) return;
    const timer = setTimeout(() => {
      toggleShowAlert();
    }, 3000);
    return () => clearTimeout(timer);
  }, [showAlert, toggleShowAlert]);

  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400 }}
          transition={{ duration: 0.5 }}
          className="fixed top-20 right-6 z-50 bg-green-100 rounded-xl"
        >
          <Alert
            className="w-[350px] flex items-center justify-between"
            variant="destructive"
          >
            <div>
              <AlertTitle>Item added</AlertTitle>
              <AlertDescription className="flex">
                <span className="font-bold inline">{alertMessage}</span> was
                successfully added to cart.
              </AlertDescription>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => toggleShowAlert()}
            >
              <X className="w-5 h-5" />
            </button>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
