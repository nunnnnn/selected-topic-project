import './AppSearch.css';

function AppSearch(props) {
    const { value, onValueChange } = props;
    return (
        <div className="app-search">
            <input 
                className="app-search-input"
                type="text" 
                value={value} 
                placeholder="Search เราเที่ยวด้วยกัน"
                onChange={(event) => onValueChange(event.target.value)} 
            />
            <div>

                <h2>20 สถานที่ น่าท่องเที่ยว</h2>
                <h3>(อยากรู้รายละเอียด คลิกตรงรูปเลยนะคะ มีคำบรรยายใต้ภาพค่าาาาาาา)</h3>
                <p>
                  1. เกาะล้าน <br/>
                  2. เกาะไผ่<br/>
                  3. อ่าวมะนาว<br/>
                  4. หาดยะนุ้ย<br/>
                  5. ภิรมย์ค่าเฟ่<br/>
                  6. หาดหัวหิน<br/>
                  7. Toscana valley และ Tosscana Piazza<br/>
                  8. ภูลมโล<br/>
                  9. เขายายเที่ยง<br/>
                  10. เกาะหลีเป๊ะ<br/>
                  11. เกาะพีพี<br/>
                  12. ภูกระดึง<br/>
                  13. ภูป่าเปาะ<br/>
                  14. เกาะแสมสาร<br/>
                  15. ภูทับเบิก<br/>
                  16. เกาะสมุย<br/>
                  17. ภูทอก<br/>
                  18. ดอยอินทนนท์<br/>
                  19. เกาะสิมิรัน<br/>
                  20. เกาะกุลา<br/>
                </p>
            </div>
        </div>
        
    );
}

export default AppSearch;