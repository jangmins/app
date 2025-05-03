export const save1 = {
  // 홈페이지 설정
  home: {
    background: {
      dark: 'bg-gradient-to-b from-gray-950 via-blue-950 to-gray-900',
      light: 'bg-gradient-to-b from-blue-100 via-blue-200 to-white'
    },
    text: {
      dark: 'text-blue-200',
      light: 'text-blue-900'
    }
  },

  // 오늘의 저축 페이지 설정
  today: {
    background: {
      dark: 'bg-gradient-to-b from-gray-950 via-amber-950 to-gray-900',
      light: 'bg-gradient-to-b from-amber-100 via-amber-200 to-white'
    },
    text: {
      dark: 'text-amber-200',
      light: 'text-amber-900'
    },
    buttons: {
      dark: 'bg-amber-950 text-amber-100 hover:bg-amber-900',
      light: 'bg-amber-200 text-amber-900 hover:bg-amber-300'
    }
  },

  // 저축 현황 페이지 설정
  savings: {
    background: {
      dark: 'bg-gradient-to-b from-gray-950 via-purple-950 to-gray-900',
      light: 'bg-gradient-to-b from-purple-100 via-purple-200 to-white'
    },
    text: {
      dark: 'text-purple-200',
      light: 'text-purple-900'
    },
    buttons: {
      deposit: {
        dark: 'bg-green-600 text-white hover:bg-green-700',
        light: 'bg-green-500 text-white hover:bg-green-600'
      },
      withdraw: {
        dark: 'bg-red-600 text-white hover:bg-red-700',
        light: 'bg-red-500 text-white hover:bg-red-600'
      }
    },
    layout: {
      title: 'flex justify-between items-center mb-4',
      depositButton: 'px-4 py-2 rounded-lg',
      withdrawButton: 'px-4 py-2 rounded-lg'
    }
  },

  // 포인트 페이지 설정
  points: {
    background: {
      dark: 'bg-gradient-to-b from-gray-950 via-green-950 to-gray-900',
      light: 'bg-gradient-to-b from-green-100 via-green-200 to-white'
    },
    text: {
      dark: 'text-green-200',
      light: 'text-green-900'
    },
    buttons: {
      dark: 'bg-green-950 text-green-100 hover:bg-green-900',
      light: 'bg-green-200 text-green-900 hover:bg-green-300'
    }
  }
}; 