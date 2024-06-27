// トレーニング記録を保存する配列
let workoutHistory = [];

// DOM要素の取得
const workoutForm = document.getElementById('workout-form');
const workoutType = document.getElementById('workout-type');
const workoutCount = document.getElementById('workout-count');
const recordWorkout = document.getElementById('record-workout');
const historyList = document.getElementById('history-list');

// 記録ボタンのクリックイベント
recordWorkout.addEventListener('click', function() {
    const type = workoutType.value;
    const count = workoutCount.value;
    
    if (count > 0) {
        // 新しいトレーニング記録を作成
        const workout = {
            type: type,
            count: count,
            date: new Date().toLocaleString()
        };
        
        // 記録を配列に追加
        workoutHistory.unshift(workout);
        
        // 画面に表示を更新
        updateHistoryDisplay();
        
        // 入力フィールドをリセット
        workoutCount.value = '';
    } else {
        alert('有効な回数を入力してください。');
    }
});

// トレーニング履歴の表示を更新する関数
function updateHistoryDisplay() {
    historyList.innerHTML = '';
    workoutHistory.forEach(function(workout) {
        const li = document.createElement('li');
        li.textContent = `${workout.date}: ${workout.type} ${workout.count}回`;
        historyList.appendChild(li);
    });
}