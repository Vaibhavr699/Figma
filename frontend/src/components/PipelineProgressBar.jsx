import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { label: 'Lead' },
  { label: 'Working' },
  { label: 'Qualified' },
  { label: 'Converted' },
];

const CIRCLE_SIZE = 53.2197265625;
const BAR_WIDTH = 1320.7900390625;
const BAR_HEIGHT = 21.08203125;
const BAR_TOP = (CIRCLE_SIZE - BAR_HEIGHT) / 2;

const PipelineProgressBar = ({ currentStep = 1 }) => {
  // currentStep: 0-based index (0-3)
  // Calculate fill so it ends at the center of the current step
  const fillPercent = (currentStep / (steps.length - 1)) * 100;

  return (
    <div style={{
      width: '100%',
      padding: '32px 0',
      background: '#F5F4FA',
      fontFamily: '"Wix Madefor Text", Inter, sans-serif',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 900,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Progress Bar */}
        <div style={{
          position: 'relative',
          width: `${BAR_WIDTH}px`,
          height: `${CIRCLE_SIZE}px`,
          margin: '0 auto 32px auto',
        }}>
          {/* Background Bar */}
          <div style={{
            position: 'absolute',
            left: 0,
            width: `${BAR_WIDTH}px`,
            top: BAR_TOP,
            height: `${BAR_HEIGHT}px`,
            background: '#E5E7EB',
            borderRadius: `${BAR_HEIGHT / 2}px`,
            zIndex: 1,
          }} />
          {/* Progress Fill */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(fillPercent / 100) * BAR_WIDTH}px` }}
            transition={{ duration: 0.7, type: 'spring' }}
            style={{
              position: 'absolute',
              left: 0,
              top: BAR_TOP,
              height: `${BAR_HEIGHT}px`,
              background: 'linear-gradient(90deg, #5CB1E2 0%, #B2E3F6 100%)',
              borderRadius: `${BAR_HEIGHT / 2}px`,
              zIndex: 2,
            }}
          />
          {/* Step Circles */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: `${BAR_WIDTH}px`,
            height: `${CIRCLE_SIZE}px`,
            zIndex: 3,
            pointerEvents: 'none',
          }}>
            {steps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;
              const leftPercent = (index / (steps.length - 1)) * 100;
              let circleStyle = {
                position: 'absolute',
                left: `calc(${leftPercent}%)`,
                top: BAR_TOP + BAR_HEIGHT / 2 - CIRCLE_SIZE / 2,
                transform: 'translate(-50%, 0)',
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px 0 rgba(44, 62, 80, 0.08)',
                fontFamily: '"Wix Madefor Text", Inter, sans-serif',
                fontWeight: 700,
                fontSize: 18,
                background: '#fff',
                border: '2.5px solid #E5E7EB',
                color: '#B0B7C3',
                transition: 'all 0.2s',
              };
              if (isCompleted) {
                circleStyle.background = '#5CB1E2';
                circleStyle.color = '#fff';
                circleStyle.border = 'none';
              } else if (isCurrent) {
                circleStyle.background = '#fff';
                circleStyle.color = '#5CB1E2';
                circleStyle.border = '2.5px solid #5CB1E2';
              }
              return (
                <div key={index} style={{
                  ...circleStyle,
                  width: 64,
                  height: 64,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: circleStyle.background,
                  border: circleStyle.border,
                  boxShadow: circleStyle.boxShadow,
                  position: circleStyle.position,
                  left: circleStyle.left,
                  top: circleStyle.top,
                  transform: circleStyle.transform,
                }}>
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.8003" cy="26.8042" r="26.6099" fill="white"/>
                    <path d="M26.5146 17.0186C21.2754 17.0186 17.0146 21.2794 17.0146 26.5186C17.0146 31.7578 21.2754 36.0186 26.5146 36.0186C31.7539 36.0186 36.0146 31.7578 36.0146 26.5186C36.0146 21.2794 31.7539 17.0186 26.5146 17.0186ZM26.5146 18.2852C31.0693 18.2852 34.7529 21.9639 34.7529 26.5186C34.7529 31.0732 31.0693 34.7568 26.5146 34.7568C21.96 34.7568 18.2813 31.0732 18.2813 26.5186C18.2813 21.9639 21.96 18.2852 26.5146 18.2852ZM26.506 21.4556C26.3387 21.4585 26.1793 21.5276 26.0627 21.6476C25.9462 21.7677 25.8818 21.929 25.8838 22.0964V22.6295C24.8612 22.8213 23.9863 23.4798 23.9863 24.621C23.9863 25.4127 24.3432 26.053 24.8225 26.4258C25.3018 26.7986 25.843 26.9639 26.318 27.1222C26.793 27.2805 27.203 27.4319 27.4362 27.6133C27.6694 27.7947 27.7813 27.9473 27.7813 28.4223C27.7813 29.4778 25.2529 29.4778 25.2529 28.4223C25.2548 28.3379 25.2398 28.254 25.2088 28.1756C25.1778 28.0971 25.1315 28.0256 25.0725 27.9653C25.0135 27.9049 24.943 27.857 24.8653 27.8243C24.7875 27.7916 24.704 27.7747 24.6196 27.7747C24.5352 27.7747 24.4517 27.7916 24.3739 27.8243C24.2962 27.857 24.2257 27.9049 24.1667 27.9653C24.1077 28.0256 24.0614 28.0971 24.0304 28.1756C23.9994 28.254 23.9844 28.3379 23.9863 28.4223C23.9863 29.5626 24.862 30.2223 25.8838 30.415V30.9457C25.8819 31.0301 25.8969 31.1139 25.9279 31.1924C25.9589 31.2709 26.0052 31.3424 26.0642 31.4027C26.1232 31.463 26.1937 31.5109 26.2715 31.5437C26.3492 31.5764 26.4327 31.5932 26.5171 31.5932C26.6015 31.5932 26.685 31.5764 26.7628 31.5437C26.8406 31.5109 26.911 31.463 26.97 31.4027C27.029 31.3424 27.0754 31.2709 27.1063 31.1924C27.1373 31.1139 27.1523 31.0301 27.1505 30.9457V30.415C28.1725 30.2224 29.0492 29.5627 29.0492 28.4223C29.0492 27.6306 28.6911 26.9903 28.2118 26.6175C27.7325 26.2447 27.1913 26.0782 26.7163 25.9199C26.2413 25.7615 25.8312 25.6114 25.598 25.43C25.3649 25.2486 25.2529 25.096 25.2529 24.621C25.2529 23.5655 27.7813 23.5655 27.7813 24.621C27.7813 24.7892 27.8481 24.9504 27.967 25.0693C28.0859 25.1882 28.2471 25.255 28.4153 25.255C28.5834 25.255 28.7446 25.1882 28.8635 25.0693C28.9824 24.9504 29.0492 24.7892 29.0492 24.621C29.0492 23.4815 28.1722 22.8237 27.1505 22.6307V22.0964C27.1515 22.0116 27.1354 21.9275 27.1034 21.8491C27.0713 21.7707 27.0238 21.6995 26.9637 21.6397C26.9036 21.58 26.8321 21.5329 26.7535 21.5013C26.6749 21.4696 26.5907 21.4541 26.506 21.4556Z" fill="#1C0A6B"/>
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
        {/* Step Labels */}
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: 0,
          zIndex: 4,
        }}>
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            return (
              <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{
                  color: isCurrent ? '#1C0A6B' : isCompleted ? '#5CB1E2' : '#B0B7C3',
                  fontWeight: 500,
                  fontSize: 15,
                  fontFamily: '"Wix Madefor Text", Inter, sans-serif',
                  textAlign: 'center',
                  marginTop: 4,
                }}>{step.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PipelineProgressBar;