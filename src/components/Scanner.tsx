
import { useState, useRef, useEffect, useCallback } from "react";
import { Camera, CameraOff, Flashlight, RotateCcw, X, Barcode as BarcodeIcon, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { simulateScan } from "@/utils/scannerUtils";

export default function Scanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [timeoutActive, setTimeoutActive] = useState(false);
  const [manualEntry, setManualEntry] = useState(false);
  const [barcodeValue, setBarcodeValue] = useState("");
  const [scanError, setScanError] = useState(false);
  const [countdown, setCountdown] = useState(120); // 2 minutes in seconds
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const navigate = useNavigate();
  
  const handleScanComplete = useCallback((barcode: string) => {
    stopScanning();
    // For demo purposes, we'll navigate to a results page with a simulated barcode
    navigate(`/results/${barcode}`);
  }, [navigate]);
  
  // Start scanning process
  const startScanning = useCallback(async () => {
    try {
      setScanError(false);
      setIsScanning(true);
      setTimeoutActive(true);
      setCountdown(120);
      
      // Request camera access
      const constraints = {
        video: { 
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      
      // Set timeout for 2 minutes
      timerRef.current = setTimeout(() => {
        setTimeoutActive(false);
        setScanError(true);
        stopScanning();
      }, 120000);
      
      // Update countdown every second
      intervalRef.current = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      
      // For demo, simulate a successful scan after a few seconds
      setTimeout(() => {
        simulateScan().then(barcode => {
          if (barcode) {
            handleScanComplete(barcode);
          }
        });
      }, 5000);
      
    } catch (error) {
      console.error("Error accessing camera:", error);
      setScanError(true);
      setIsScanning(false);
    }
  }, [handleScanComplete]);
  
  // Stop scanning process
  const stopScanning = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsScanning(false);
    setTimeoutActive(false);
    setFlashlightOn(false);
  }, []);
  
  // Toggle flashlight (Note: this is a simulation as the Web API doesn't fully support flashlight control)
  const toggleFlashlight = useCallback(() => {
    setFlashlightOn(prev => !prev);
    // In a real implementation, you would use:
    // const track = streamRef.current?.getVideoTracks()[0];
    // track?.applyConstraints({ advanced: [{ torch: !flashlightOn }] });
  }, []);
  
  // Handle manual barcode entry
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (barcodeValue.trim().length > 0) {
      handleScanComplete(barcodeValue);
    }
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopScanning();
    };
  }, [stopScanning]);
  
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="glass p-6 pt-8 rounded-2xl shadow-xl dark:shadow-none border border-white/20 dark:border-white/10 flex flex-col items-center relative overflow-hidden">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-6">Barcode Scanner</h2>
          
          {/* Camera Display */}
          <div className={`w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-900 mb-6 relative ${isScanning ? 'border-4 border-primary' : 'border border-gray-200 dark:border-gray-800'}`}>
            {isScanning ? (
              <>
                <video 
                  ref={videoRef} 
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[1px] bg-primary animate-pulse-soft"></div>
                </div>
                {flashlightOn && (
                  <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white">
                <BarcodeIcon className="w-16 h-16 mb-4 text-gray-400" />
                <p className="text-gray-400">
                  {scanError ? "Scan failed" : "Camera is off"}
                </p>
              </div>
            )}
          </div>
          
          {/* Controls */}
          {!manualEntry ? (
            <>
              {/* Scan Controls */}
              <div className="flex items-center justify-center gap-4 mb-6 w-full">
                <Button
                  onClick={isScanning ? stopScanning : startScanning}
                  variant={isScanning ? "destructive" : "default"}
                  className="flex-1 rounded-full shadow-lg transition-transform hover:scale-[1.02] duration-200"
                >
                  {isScanning ? (
                    <>
                      <CameraOff className="mr-2 h-4 w-4" />
                      Stop
                    </>
                  ) : (
                    <>
                      <Camera className="mr-2 h-4 w-4" />
                      Start Scan
                    </>
                  )}
                </Button>
                
                {isScanning && (
                  <Button
                    onClick={toggleFlashlight}
                    variant="outline"
                    className={`rounded-full ${flashlightOn ? 'bg-white/90 text-black' : ''}`}
                  >
                    <Flashlight className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              {/* Timer & Error Message */}
              {timeoutActive && (
                <div className="w-full mb-4">
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-1000"
                      style={{ width: `${(countdown / 120) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-2">
                    {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')} remaining
                  </p>
                </div>
              )}
              
              {scanError && (
                <div className="w-full mb-4 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg text-center">
                  <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                    Scan timed out. Please try again or enter barcode manually.
                  </p>
                </div>
              )}
              
              {/* Manual Entry Toggle */}
              <Button
                onClick={() => setManualEntry(true)}
                variant="ghost"
                className="text-sm"
              >
                <Edit3 className="mr-2 h-4 w-4" />
                Enter barcode manually
              </Button>
            </>
          ) : (
            <>
              {/* Manual Entry Form */}
              <form onSubmit={handleManualSubmit} className="w-full space-y-4">
                <div className="space-y-2">
                  <label htmlFor="barcode" className="text-sm font-medium">
                    Enter Barcode Number
                  </label>
                  <Input
                    id="barcode"
                    value={barcodeValue}
                    onChange={(e) => setBarcodeValue(e.target.value)}
                    placeholder="e.g. 8901072000128"
                    className="rounded-md"
                    autoFocus
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the 12 or 13-digit barcode from the product
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    type="submit"
                    className="flex-1 rounded-full shadow-lg transition-transform hover:scale-[1.02] duration-200"
                    disabled={barcodeValue.trim().length === 0}
                  >
                    <BarcodeIcon className="mr-2 h-4 w-4" />
                    Submit Barcode
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setManualEntry(false)}
                    className="rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </>
          )}
          
          {/* Demo Note */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 w-full">
            <p className="text-xs text-center text-muted-foreground">
              <span className="font-semibold">Demo Mode:</span> The scanner will simulate a successful scan after 5 seconds
            </p>
          </div>
        </div>
        
        {/* Retry Button (if scan failed) */}
        {scanError && !isScanning && (
          <div className="mt-6 text-center">
            <Button
              onClick={startScanning}
              variant="outline"
              className="rounded-full glass transition-transform hover:scale-[1.05] duration-200"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
