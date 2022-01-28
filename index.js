function createRow({id, url, name, ip, manualUrl}) {
    const row = document.createElement('tr');

    const anchor1 = document.createElement('a')
    anchor1.text = id
    anchor1.href = url
    const data1 = document.createElement('td')
    data1.appendChild(anchor1)
    row.appendChild(data1)

    const data2 = document.createElement('td')
    data2.append(name)
    row.appendChild(data2)

    const data3 = document.createElement('td')
    data3.append(ip)
    row.appendChild(data3)

    const anchor2 = document.createElement('a')
    anchor2.href = manualUrl
    anchor2.text = 'Manual'
    const data4 = document.createElement('td')
    data4.appendChild(anchor2)
    row.appendChild(data4)

    return row
}

const tbody = document.getElementById("device-management-table");
fetch('./devices.json')
    .then(response => response.json())
    .then(devices => devices
        .map(device => createRow(device))
    )
    .then(rows => {
        const fragment = document.createDocumentFragment();
        rows.forEach(row => fragment.appendChild(row))
        tbody.appendChild(fragment)
    })
