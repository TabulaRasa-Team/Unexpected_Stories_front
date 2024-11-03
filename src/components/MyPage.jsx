import {React, useState} from 'react';
import '../style/MyPage.css';
import Post from './Post';
import Button from './Button'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function MyPage() {
    const location = useLocation()
    const data = location.state
    const [selected, setSelected] = useState(false)
    const [selectedId, setSelectedId] = useState(false)

    let dummyPost = [
        {
            id: 1,
            title: "헬스 관리 방법",
            like: 1403,
            view: 9780,
            date: "24년 08월 11일",
            content: "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다. 소학교 때 책상을 같이 했던 "
        },
        {
            id: 2,
            title: "헬스 관리 방법",
            like: 1403,
            view: 9780,
            date: "24년 08월 11일",
            content: "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다. 소학교 때 책상을 같이 했던 "
        },
        {
            id: 3,
            title: "헬스 관리 방법",
            like: 1403,
            view: 9780,
            date: "24년 08월 11일",
            content: "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다. 소학교 때 책상을 같이 했던 "
        }
    ]

    return (
        <>
            <h1 className='MyPageMainTitle'>내가 공유한 이야기</h1>
            <ul className='PostList'>
                {dummyPost.map((item) => (
                    <Post 
                        data={item}
                        key={item.id}
                        onClick={() => {
                            setSelectedId(item.id)
                            setSelected(true)
                        }}
                        isSelected={selected}
                        selectedId={selectedId == item.id ? selectedId : false}
                    />
                ))}
            </ul>
            <div className="buttonContainer">
                <Link to='../../MenuPage' state={{name:data.name,num:data.num,toWhere:data.toWhere,distance:data.distance}} style={{ textDecoration: "none"}}>
                    <Button content={"뒤로가기"} />
                </Link>
            </div>
        </>
    )
}

export default MyPage;